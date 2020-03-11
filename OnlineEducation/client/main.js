import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './registrationNlogin.html';

Router.route('Home', function(){
  this.render('Home');
});

Router.route('/registrationNloginPage', function(){
   this.render('registrationNloginPage');
});

Router.route('/', function(){
    this.render('Home');
});
