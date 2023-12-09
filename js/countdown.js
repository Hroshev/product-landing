'use strict';

function Util() {}

Util.setAttributes = function (el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
};

(function () {
  var CountDown = function (element) {
    this.element = element;
    this.labels = this.element.getAttribute('data-labels') ? this.element.getAttribute('data-labels').split(',') : [];
    this.visibleLabels = this.element.getAttribute('data-visible-labels') ? this.element.getAttribute('data-visible-labels').split(',') : [];
    this.intervalId;

    // set visible labels
    this.setVisibleLabels();

    // create countdown HTML
    this.createCountDown();

    // store time elements
    this.days = this.element.querySelector('.js-countdown__value--0');
    this.hours = this.element.querySelector('.js-countdown__value--1');
    this.mins = this.element.querySelector('.js-countdown__value--2');
    this.secs = this.element.querySelector('.js-countdown__value--3');
    
    // set the end time for the current day
    this.endTime = this.calculateEndTime();

    // init counter
    this.initCountDown();
  };

  CountDown.prototype.setVisibleLabels = function () {
    this.visibleLabels = this.visibleLabels.map(function (label) {
      return label.trim();
    });
  };

  CountDown.prototype.createCountDown = function () {
    var wrapper = document.createElement("div");
    Util.setAttributes(wrapper, { 'aria-hidden': 'true', 'class': 'countdown__timer' });

    for (var i = 0; i < 4; i++) {
      var timeItem = document.createElement("span"),
        timeValue = document.createElement("span"),
        timeLabel = document.createElement('span');

      timeItem.setAttribute('class', 'countdown__item');
      timeValue.setAttribute('class', 'countdown__value countdown__value--' + i + ' js-countdown__value--' + i);
      timeItem.appendChild(timeValue);

      if (this.labels && this.labels.length > 0) {
        timeLabel.textContent = this.labels[i].trim();
        timeLabel.setAttribute('class', 'countdown__label');
        timeItem.appendChild(timeLabel);
      }

      wrapper.appendChild(timeItem);
    }

    // append new content to countdown element
    this.element.insertBefore(wrapper, this.element.firstChild);
  };

  CountDown.prototype.calculateEndTime = function () {
    var now = new Date();
    var endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
    return endOfDay.getTime();
  };

  CountDown.prototype.initCountDown = function () {
    var self = this;
    this.intervalId = setInterval(function () {
      self.updateCountDown();
    }, 1000);
    this.updateCountDown();
  };

  CountDown.prototype.updateCountDown = function () {
    var time = parseInt((this.endTime - new Date().getTime()) / 1000),
      days = 0,
      hours = 0,
      mins = 0,
      seconds = 0;

    if (isNaN(time) || time < 0) {
      clearInterval(this.intervalId);
      this.emitEndEvent();
    } else {
      days = parseInt(time / 86400);
      time = (time % 86400);
      hours = parseInt(time / 3600);
      time = (time % 3600);
      mins = parseInt(time / 60);
      time = (time % 60);
      seconds = parseInt(time);
    }

    // hide days/hours/mins if not available
    if (days == 0 && this.visibleLabels.indexOf('день') < 0) this.days.parentElement.style.display = "none";
    if (days == 0 && hours == 0 && this.visibleLabels.indexOf('годин') < 0) this.hours.parentElement.style.display = "none";
    if (days == 0 && hours == 0 && mins == 0 && this.visibleLabels.indexOf('хвилин') < 0) this.mins.parentElement.style.display = "none";

    this.days.textContent = days;
    this.hours.textContent = this.getTimeFormat(hours);
    this.mins.textContent = this.getTimeFormat(mins);
    this.secs.textContent = this.getTimeFormat(seconds);
  };

  CountDown.prototype.getTimeFormat = function (time) {
    return ('0' + time).slice(-2);
  };

  CountDown.prototype.emitEndEvent = function () {
    var event = new CustomEvent('countDownFinished');
    this.element.dispatchEvent(event);
  };

  // Initialize the CountDown objects
  document.addEventListener("DOMContentLoaded", function (event) {
    var countDown = document.getElementsByClassName('js-countdown');
    if (countDown.length > 0) {
      for (var i = 0; i < countDown.length; i++) {
        (function (i) {
          new CountDown(countDown[i]);
        })(i);
      }
    }
  });
}());