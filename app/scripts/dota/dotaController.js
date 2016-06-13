angular.module('app').controller('dotaController', function($scope, $http) {

    $http.get("https://restcountries.eu/rest/v1/currency/eur")
        .then(function(response) { $scope.countries = response.data; });

    $scope.dotadata = [{
        title: "Post1",
        headline: "This is a headline for Post1",
        story: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
        date: "01/12/2016",
        image: "http://img14.deviantart.net/72d9/i/2014/296/c/2/jahrakal_troll_warlord_dota_2_hero_by_ounkhambrake-d83uffv.png",
        author: "Patrick Killalea",
        avatar: "http://vignette2.wikia.nocookie.net/p__/images/f/f4/CookieMonster-Sitting.jpg/revision/latest?cb=20120507220415&path-prefix=protagonist"
    }, {
        title: "Post2",
        headline: "This is a headline for Post2",
        story: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
        date: "01/05/2016",
        image: "https://cdn.pastemagazine.com/www/system/images/photo_albums/dota-2-heroes-2-final/large/slark-dota.jpg?1384968217",
        author: "Patrick Killalea",
        avatar: "http://vignette2.wikia.nocookie.net/p__/images/f/f4/CookieMonster-Sitting.jpg/revision/latest?cb=20120507220415&path-prefix=protagonist"
    }, {
        title: "Post3",
        headline: "This is a headline for Post3",
        story: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
        date: "11/07/2016",
        image: "http://www.toptenbestin.com/wp-content/uploads/2015/06/mirana_by_zaphk-d61vxqr.jpg",
        author: "Patrick Killalea",
        avatar: "http://vignette2.wikia.nocookie.net/p__/images/f/f4/CookieMonster-Sitting.jpg/revision/latest?cb=20120507220415&path-prefix=protagonist"
    }, {
        title: "Post4",
        headline: "This is a headline for Post4",
        story: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
        date: "04/04/2016",
        image: "http://www.pcgamesn.com/sites/default/files/best%20dota%202%20heroes.jpg",
        author: "Patrick Killalea",
        avatar: "http://vignette2.wikia.nocookie.net/p__/images/f/f4/CookieMonster-Sitting.jpg/revision/latest?cb=20120507220415&path-prefix=protagonist"
    }, {
        title: "Post5",
        headline: "This is a headline for Post5",
        story: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
        date: "06/09/2015",
        image: "https://cdn.pastemagazine.com/www/articles/dota2heroes3main.jpg",
        author: "Patrick Killalea",
        avatar: "http://vignette2.wikia.nocookie.net/p__/images/f/f4/CookieMonster-Sitting.jpg/revision/latest?cb=20120507220415&path-prefix=protagonist"
    }];
});
