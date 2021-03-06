describe('UserReviewsCtrl tests', function() {
  'use strict';
  var scope,
    controller,
    Users = {
      reviews: function(currentUser, cb) {
        var res;
        if (currentUser) {
          res = {
            Reviews: [1, 2, 3]
          };
        }
        cb(!currentUser, res);
      }
    },
    currentUser = {
      city: 'Nairobi',
      country: 'Kenya',
      created_at: '2015-11-30T08:27:51.129Z',
      dob: '1941-09-29T21:00:00.000Z',
      email: 'koske.hannah@gmail.com',
      enabled: 'yes',
      facebook_auth_id: null,
      facebook_auth_token: null,
      firstname: 'Hannah',
      gender: 'female',
      google_auth_id: null,
      google_auth_token: null,
      id: 1,
      img_public_id: 'mpoibjealpmx2pmgc33a',
      img_url: 'http://res.cloudinary.com/vvida/image/upload/v1448872085/' +
        'mpoibjealpmx2pmgc33a.png',
      lastname: 'Koske',
      password: '$2a$10$mzOv0oTX/pNtl1f5HxTZZ.' +
        'LgHMBA2UHPYygq8AtdXeFpfoSGiw32u',
      role: 'user',
      status: 'active',
      token: null,
      updated_at: '2015-12-01T09:29:08.522Z',
      username: 'HannahCK',
    };

  beforeEach(function() {
    module('vvida');
  });

  beforeEach(function() {
    inject(function($injector) {
      var $controller = $injector.get('$controller');
      scope = $injector.get('$rootScope');
      controller = $controller('UserReviewsCtrl', {
        $scope: scope,
        Users: Users
      });
    });

  });

  it('should call get Users reviews and set message', function() {
    scope.currentUser = false;
    spyOn(Users, 'reviews').and.callThrough();
    scope.init();
    expect(Users.reviews).toHaveBeenCalled();
    expect(scope.message).toBe('Could not get reviews.');
  });

  it('should call get Users reviews and set reviews', function() {
    scope.currentUser = currentUser;
    spyOn(Users, 'reviews').and.callThrough();
    scope.init();
    expect(scope.rateThis).toBeDefined();
    expect(Users.reviews).toHaveBeenCalled();
    expect(scope.message).not.toBeTruthy();
  });
});
