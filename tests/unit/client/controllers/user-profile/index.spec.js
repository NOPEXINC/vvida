describe('UserProfileCtrl tests', function() {
  'use strict';
  var scope,
    controller,
    Users = {
      eventsCount: function(currentUser, cb) {
        var res = 0;
        if (currentUser) {
          res = 3
        }
        cb(!currentUser, res);
      },
      itemsCount: function(currentUser, cb) {
        var res=0;
        if (currentUser) {
          res = 3;
        }
        cb(!currentUser, res);
      },
      reviewsCount: function(currentUser, cb) {
        var res=0;
        if (currentUser) {
          res = 3;
        }
        cb(!currentUser, res);
      },
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
      controller = $controller('UserProfileCtrl', {
        $scope: scope,
        Users: Users
      });
    });

  });

  it('should fail to initialize controller', function() {
    scope.currentUser = false;
    spyOn(Users, 'eventsCount').andCallThrough();
    spyOn(Users, 'reviewsCount').andCallThrough();
    spyOn(Users, 'itemsCount').andCallThrough();
    scope.init();
    expect(Users.eventsCount).toHaveBeenCalled();
    expect(Users.reviewsCount).toHaveBeenCalled();
    expect(Users.itemsCount).toHaveBeenCalled();
    expect(scope.itemsCount).toBe(0);
    expect(scope.eventsCount).toBe(0);
    expect(scope.reviewsCount).toBe(0);
  });

  it('should initialize contoller', function() {
    scope.currentUser = currentUser;
    spyOn(Users, 'eventsCount').andCallThrough();
    spyOn(Users, 'reviewsCount').andCallThrough();
    spyOn(Users, 'itemsCount').andCallThrough();
    scope.init();
    expect(Users.eventsCount).toHaveBeenCalled();
    expect(Users.reviewsCount).toHaveBeenCalled();
    expect(Users.itemsCount).toHaveBeenCalled();
    expect(scope.itemsCount).toBe(3);
    expect(scope.eventsCount).toBe(3);
    expect(scope.reviewsCount).toBe(3);
  });
});
