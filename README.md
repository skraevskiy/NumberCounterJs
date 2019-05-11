# NumberCounterJs

Counter digits when scrolling the page.

<b>Arguments:</b> start, finish, step, dir, fix, speed, selector, delay;

* start - Counter start value.
* finish - Counter finish value.
* step - Counter step value.
* dir - Counter direction value. Use "-1" value for reverse counter.
* fix - Number of decimals for floating digits.
* speed - Counter speed value.
* selector - Using a counter for an element on a page. Leaving empty for use counter in browser console.
* delay - Counter delay value after scrolling to selector.

<b>Use in HTML:</b>

<pre><script src="NumberCounter.js"></script>
<script>
  let counter1 = new NumberCounter(0, -23.5, 0.1, -1, 2, 100, '.counter-1', 0),
      counter2 = new NumberCounter(20, 0, 1, -1, 0, 200, '.counter-2', 0),
      counter3 = new NumberCounter(0, 22, 1, 1, 0, 100, '.counter-3', 0),
      counter4 = new NumberCounter(0, 100, 1, 1, 0, 500, '', 5000),
      counter5 = new NumberCounter(0, 22, 1, 1, 0, 100, '.counter-5', 0),
      counter6 = new NumberCounter(0, 22, 1, 1, 0, 100, '.counter-6', 0),
      counter7 = new NumberCounter(0, 22, 1, 1, 0, 100, '.counter-7', 0),
      counter8 = new NumberCounter(0, 22, 1, 1, 0, 100, '', 0),
      counter9 = new NumberCounter(0, 5, 1, 1, 0, 100, 0, 0),
      counter10 = new NumberCounter(0, 22, 1, 1, 0, 100, '.counter-10', 0);
</script></pre>
