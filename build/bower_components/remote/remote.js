;
(function () {

  var log = console.log.bind(console);
  var error = console.log.bind(console, 'ERROR');
  var info = console.log.bind(console, 'INFO');
  var debug = console.debug.bind(console, 'DEBUG');


  // imports
  // =======

  var jsonParseArray = window['jsonparsearray'];


  // main
  // ====

  var R = {};

  // thenable version of `xhr`. Returns:
  // {
  //    status: HTTP status,
  //    data: data returned from server,
  //    err: error code in case of an error
  //  }
  R.xhr = function (url, method, data, headers, mimeType, user, password) {
    if (!url || !method) throw new Error("ERROR: url and method are mandatory!");

    return new Promise(function (fulfill, reject) {
      var request = new XMLHttpRequest();

      request.addEventListener('load', function () {
        fulfill({
          status: request.status,
          data: request.responseText
        });
      }, false);

      var transferError = function (evt) {
        error('xhr error:', request.status, evt);
        reject({
          status: request.status,
          data: request.responseText,
          err: evt
        });
      };

      request.addEventListener('error', transferError, false);
      request.addEventListener('abort', transferError, false);

      if (mimeType) request.overrideMimeType(mimeType);

      request.open(method, url, true);

      if (user && password) {
        request.withCredentials = true;
        request.setRequestHeader('user', user);
        request.setRequestHeader('password', password);
      }

      if (headers) {
        Object.keys(headers).forEach(function (key) {
          request.setRequestHeader(key, headers[key]);
        });
      }

      if (data) request.send(data);
      else request.send(null);

    });
  };

  // like xhr and tries to parse the result as JSON. Accepts JSON obejcts as data.
  R.xhrJSON = function (url, method, data, headers, user, password) {
    if (!url | !method) throw new Error('ERROR: url and method are mandatory');

    if (data && typeof data !== 'object' && typeof data !== 'string')
      throw new Error('ERROR: Type for data not supported: ' + typeof data);

    if (data && typeof data === 'object') data = JSON.stringify(data);

    return R.xhr(url, method, data, headers, null, user, password).then(function (res) {
      // Try to convert response to JSON
      try {
        //res.data = JSON.parse(res.data);
        var p = new window['jsonparsearray']; //import don't work jsonParseArray();
        p.write(res.data);
        res.data = p.get();
      } catch (e) {
        info('xhrJSON:response is not JSON, will return string');
      }

      return res;
    });
  };

  // thenable xhr that saves the result in base64 encoded in local storage (IndexedDb or local file) using YDN-DB
  R.xhrToDbAsBase64 = function (database, store, key, url, method, headers, user, password) {
    if (!database || !store || !key || !url || !method) {
      throw new Error("ERROR: database, store, key, url and method are mandatory attributes");
    }

    return new Promise(function (fulfill, reject) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';

      xhr.onload = function () {
        var reader = new FileReader();
        reader.onloadend = function () {

          var schema = {
            stores: [{
              name: store,
              type: 'TEXT' // data type of 'file' object store key
              }]
          };
          var db = new ydn.db.Storage(database, schema);

          db.put(store, {
              data: reader.result
            }, key)
            .done(function (res) {
              fulfill({
                status: xhr.status,
                db: res
              });
            }, function (err) {
              reject({
                status: xhr.status,
                err: err
              });
            });
        }
        reader.readAsDataURL(xhr.response);
      };

      xhr.open(method, url);

      if (user && password) {
        xhr.withCredentials = true;
        xhr.setRequestHeader('user', user);
        xhr.setRequestHeader('password', password);
      }

      if (headers) {
        Object.keys(headers).forEach(function (key) {
          xhr.setRequestHeader(key, headers[key]);
        });
      }

      xhr.send();
    });
  };

  // thenable xhr that takes the data from a local database
  R.xhrToDb = function (database, store, key, url, method, data, headers, user, password) {
    if (!database || !store || !key || !url) {
      throw new Error("ERROR: database, store, key and url are mandatory attributes");
    }

    var schema = {
      stores: [{
        name: store,
        type: 'TEXT' // data type of 'file' object store key
              }]
    };
    var db = new ydn.db.Storage(database, schema);

    return R.xhr(url, method, data, headers, null, user, password)
      .then(function (res) {
        return db.put(store, {
            data: res.data
          }, key)
          .done(function (res) {
            return Promise.resolve({
              status: res.status
            });
          }, function (err) {
            return Promise.reject({
              err: err
            });
          });
      });

  };

  // thenable xhr that stores several rows to a local database
  R.xhrToDb2 = function (database, store, keyPath, url, method, data, headers, user, password) {
    if (!database || !store || !keyPath || !url) {
      throw new Error("ERROR: database, store, key and url are mandatory attributes");
    }

    var schema = {
      stores: [{
        name: store,
        keyPath: keyPath,
        autoIncrement: false
      }]
    };

    var db = new ydn.db.Storage(database, schema);

    return remote.xhrJSON(url, method, data, headers, user, password)
      .then(function (res) {
        res.data.shift();
        promises = [];
        res.data.forEach(function (row) {
          debug(row);
          promises.push(db.put(store, row))
        });

        return Promise.all(promises);
      })
      .then(function (res) {
        return Promise.resolve({
          status: res
        });
      }, function (err) {
        return Promise.reject({
          err: err
        });
      });

  };

  // thenable xhr that takes the data from a local database
  R.xhrFromDb = function (database, store, key, url, method, headers, user, password) {
    if (!database || !store || !key || !url) {
      throw new Error("ERROR: database, store, key and url are mandatory attributes");
    }

    var schema = {
      stores: [{
        name: store,
        type: 'TEXT' // data type of 'file' object store key
              }]
    };
    var db = new ydn.db.Storage(database, schema);

    return db.get(store, key).done(function (res) {
      return R.xhr(url, method, res.data, headers, user, password);
    }, function (err) {
      Promise.reject({
        err: err
      });
    });
  };

  // Exports
  // =======

  window['remote'] = R;

}());
