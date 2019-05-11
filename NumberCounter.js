function NumberCounter(start, finish, step, dir, fix, speed, selector, delay) {
  start = (start !== '' && start !== undefined) ? start : 0;
  finish = (finish !== '' && finish !== undefined) ? finish : 10;
  step = step || 1;
  dir = dir || 0;
  fix = fix || 0;
  speed = speed || 1000;
  delay = delay || 1000;

  function Timeout(fn, delay) {
    let id = setTimeout(fn, delay);

    this.cleared = false;

    this.clear = function() {
      this.cleared = true;

      clearTimeout(id);
    };
  }

  function Interval(fn, interval) {
    let id = setInterval(fn, interval);

    this.cleared = false;

    this.clear = function() {
      this.cleared = true;

      clearInterval(id);
    };
  }

  function makeCounter(start, step, dir, fix) {
    var count = (dir == -1) ? start+step : start-step;

    return function() {
      if (dir == -1) {
        count -= step;
      } else {
        count += step;
      }

      return count.toFixed(fix);
    };
  }

  let elem = selector != '' ? (document.querySelector(selector) || undefined) : undefined,
      counter = makeCounter(start, step, dir, fix),
      sTimeout = undefined,
      sInterval = undefined;

  function counterInit() {
    sTimeout = new Timeout(function() {
      sInterval = new Interval(function() {
        let count = counter();

        if ((dir == -1 && count <= finish) || (dir != -1 && count >= finish)) {
          sInterval.clear();
          count = finish;
        }

        if (elem) elem.innerText = count;
        else console.log(count);
      }, speed);

      sTimeout.clear();
    }, delay);
  }

  function init() {
    if (elem) {
      let elemHeight = elem.offsetHeight,
          elemPos = elem.offsetTop + elemHeight;

      document.addEventListener('scroll', function() {
        let scrollPos = window.pageYOffset || document.documentElement.scrollTop,
            clientHeight = document.documentElement.clientHeight,
            scrollHeight = Math.max(
              document.body.scrollHeight, document.documentElement.scrollHeight,
              document.body.offsetHeight, document.documentElement.offsetHeight,
              document.body.clientHeight, clientHeight
            ),
            scrolled = scrollPos+clientHeight;

        if (sTimeout === undefined && sInterval === undefined && scrolled >= elemPos) counterInit();
      });
    } else {
      counterInit();
    }
  }

  init();
};
