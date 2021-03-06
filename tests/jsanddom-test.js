/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' );

    // Make sure the result from the divide function is valid
    ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
/********************************
Please create your tests below...
********************************/


/********************************
 Unit Test for reverseString
 ********************************/
module( "Reverse String Unit Test" );
test( "Reverse String Test", 3, function() {
  // Verify the method exists
  equal( typeof reverseString, 'function', 'Must contain a reverseString function' );

  // Make sure the result from the reverseString function is valid
  equal( reverseString('baseball'), 'llabesab', 'Expected llabesab as the result, the result was: ' + reverseString('baseball') );

  // Make sure the result from the reverseString function is valid for more complex string
  equal( reverseString('Happy Birthday to you!'), '!uoy ot yadhtriB yppaH', 'Expected !uoy ot yadhtriB yppaH as the result, the result was: ' + reverseString('Happy Birthday to you!') );
});


/********************************
 Unit Test for findMinValue
 ********************************/
module( "Find Min Value Unit Test" );
test( "Find Min Value Test", 4, function() {
  // Verify the method exists
  equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );

  // Make sure the minimum value is returned
  equal( findMinValue([1,2,3,4,5,6]), 1, 'Expected 1 as the result, the result was: ' + findMinValue([1,2,3,4,5,6]) );

  // Make sure the minimum value is returned
  equal( findMinValue([6,5,4,3,2,1]), 1, 'Expected 1 as the result, the result was: ' + findMinValue([6,5,4,3,2,1]) );

  // Make sure the minimum value is returned
  equal( findMinValue([7,6,6,6,6,7.10,66,99,6]), 6, 'Expected 6 as the result, the result was: ' + findMinValue([7,6,6,6,6,7.10,66,99,6]) );
});

/********************************
 Unit Test for findDistinctValues
 ********************************/
module( "Find Distinct Values Unit Test" );
test( "Find Distinct Values Test", 3, function() {
  // Verify the method exists
  equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );

  // Make sure the result from the findDistinctValues function is valid
  deepEqual( findDistinctValues(["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"]), ["Mike","Matt","Nancy","Adam","Jenny","Carl"], 'Expected ["Mike","Matt","Adam","Jenny","Nancy","Carl"] as the result, the result was: ' + findDistinctValues(["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"]) );

  // Make sure the result from the findDistinctValues function is valid
  deepEqual( findDistinctValues(["one", 1, "1", "One"]), ["one", 1, "One"], 'Expected ["one", 1, "One"] as the result, the result was: ' + findDistinctValues(["one", 1, "1", "One"]) );
});


/********************************
 Unit Test for doFizzBuzz
 ********************************/
module( "FizzBuzz Unit Test" );
test( "doFizzBuzz Test", 5, function() {
  // Verify the method exists
  equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' );

  var results = doFizzBuzz();

  // Make sure the correct number of fizzbuzz numbers are found
  var totalFizzBuzz = results.fizzbuzz.length;
  equal(totalFizzBuzz , 6, 'Expected 6 numbers that are multiples of both three and five, the result was: ' + totalFizzBuzz );

  // Make sure the correct number of fizz numbers are found
  var totalFizz = results.fizz.length;
  equal( totalFizz, 27, 'Expected 27 numbers that are multiples of three, the result was: ' + totalFizz );

  // Make sure the correct number of buzz numbers are found
  var totalBuzz = results.buzz.length;
  equal( totalBuzz, 14, 'Expected 14 numbers that are multiples of five, the result was: ' + totalBuzz );

  // Make sure the correct number of nonfizzbuzz, nonfizz and nonbuzz numbers are found
  var totalOther = results.other.length;
  equal( totalOther, 53, 'Expected 53 numbers that are not multiples of five or three or three and five, the result was: ' + totalOther );
});

/********************************
 Unit Test for removeFruits
 ********************************/
module( "Remove Fruits Unit Test" );
test( "removeFruits Test", 2, function() {
  // Verify the method exists
  equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' );

  // Make sure the fruits are removed from the array
  deepEqual( removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['pear', 'banana']), ["apple", "orange", "kiwi", "plum", "strawberry"], 'Expected ["apple", "orange", "kiwi", "plum", "strawberry"], the result was: ' + removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['pear', 'banana']) );

});

/********************************
 Unit Test for pushOntoArray
 ********************************/
module( "Push Onto Array Unit Test" );
test( "pushOntoArray Test", 3, function() {
  // Verify the method exists
  equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' );

  // Make sure the the number was pushed to the array
  deepEqual(pushOntoArray([1, 2, 3, 4, 5], 6), [1, 2, 3, 4, 5, 6], 'Expected [1, 2, 3, 4, 5, 6], the result was: ' + pushOntoArray([1, 2, 3, 4, 5], 6));

  // Make sure the the array was pushed to the array
  deepEqual(pushOntoArray([1, 2, 3, 4, 5], [7, 8, 9]), [1, 2, 3, 4, 5, 7, 8, 9], 'Expected [1, 2, 3, 4, 5, 7, 8, 9], the result was: ' + pushOntoArray([1, 2, 3, 4, 5], [7, 8, 9]));

});

/********************************
 Unit Test for splitListStrUsingComma
 ********************************/
module( "Split List Str Using Comma Unit Test" );
test( "splitListStrUsingComma Test", 3, function() {
  // Verify the method exists
  equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' );

  // Make sure the the number was pushed to the array
  deepEqual(splitListStrUsingComma(''), [], 'Expected empty array, the result was: ' + splitListStrUsingComma(''));

  // Make sure the the array was pushed to the array
  deepEqual(splitListStrUsingComma('The, quick, brown, fox jumped over'), ["The", " quick", " brown", " fox jumped over"], 'Expected "The", " quick", " brown", " fox jumped over", the result was: ' + splitListStrUsingComma('The, quick, brown, fox jumped over'));

});


/********************************
 Unit Test for sum
 ********************************/
module( "Find Sum Unit Test" );
test( "Find Sum Test", 4, function() {
  // Verify the method exists
  equal( typeof sum, 'function', 'Must contain a sum function' );

  // Make sure the sum value of 0 is returned
  equal( sum(), 0, 'Expected 0 as the result, the result was: ' + sum() );

  // Make sure the sum value of 1 is returned
  equal( sum(1), 1, 'Expected 1 as the result, the result was: ' + sum(1) );

  // Make sure the sum value of 6 is returned
  equal( sum(1,2,3), 6, 'Expected 6 as the result, the result was: ' + sum(1,2,3) );
});

/********************************
 Unit Test for isOnlyWhitespace
 ********************************/
module( "Is Only Whitespace Unit Test" );
test( "isOnlyWhitespace Test", 3, function() {
  // Verify the method exists
  equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' );

  // Make sure the the number was pushed to the array
  equal(isOnlyWhitespace(''), true, 'Expected empty string, the result was: ' + isOnlyWhitespace(''));

  // Make sure the the array was pushed to the array
  equal(isOnlyWhitespace('The, quick, brown, fox jumped over'), false, 'Expected non-empty string, the result was: ' + isOnlyWhitespace('The, quick, brown, fox jumped over'));

});

/********************************
 Unit Test for counter
 ********************************/
module( "Counter Test" );
test( "counter Test", 4, function() {
  // Verify the method exists
  equal( typeof counter, 'object', 'Must contain a counter object' );

  // check the default value which should be 0
  equal(counter.value(), 0, 'Expected zero, the result was: ' + counter.value());

  // increase the counter by 2
  counter.increment();
  counter.increment();

  // check the value of counter, which should be 2
  equal(counter.value(), 2, 'Expected 2, the result was: ' + counter.value());

  // decrease the counter value by 1
  counter.decrement();

  // check the counter value, which should be 1
  equal(counter.value(), 1, 'Expected 1, the result was: ' + counter.value());

});


/********************************
 Unit Test for DataTable
 ********************************/
module( "Data Table Test" );
test( "DataTable Test", 4, function() {
  // Verify the method exists
  equal( typeof DataTable, 'function', 'Must contain a DataTable function' );

  var table = new DataTable();
  table.addColumns('column1', 'column2', 'column3');
  table.addRow('value1A', 'value1B', 'value1C');
  table.addRow('value2A', 'value2B', 'value2C');

  var tableData = table.getData();

  equal(tableData['column1']['column1-value1A'], 'value1A', 'Expected value1A, the result was: ', tableData['column1']['column1-value1A']);

  equal(tableData['column2']['column2-value2B'], 'value2B', 'Expected value2B, the result was: ', tableData['column2']['column2-value2B']);

  equal(tableData['column3']['column3-value2C'], 'value2C', 'Expected value2C, the result was: ', tableData['column3']['column3-value2C']);
});

/********************************
 Unit Test for createGetInteger & logSelectedValue
 ********************************/
module( "Create Get Integer Test" );
test( "createGetInteger Test", 4, function() {
  // Verify the method exists
  equal( typeof createGetInteger, 'function', 'Must contain a createGetInteger function' );
  equal( typeof logSelectedValue, 'function', 'Must contain a logSelectedValue function' );

  // clear container to prevent issues from other test
  document.getElementById('qunit-fixture').innerHTML = '';

  // run the function
  createGetInteger('qunit-fixture', logSelectedValue);

  // test for the select element
  equal(typeof document.getElementById("select-integer"), 'object', 'Expected select box element, the result was: ' + document.getElementById("select-integer"));

  // create test data off of the elements created for the previous test
  var currentTarget = document.getElementById('button-action');

  // test the return value which is the same as the log value
  equal(logSelectedValue({ currentTarget: currentTarget}), '0', 'Expected select box value of 0, the result was: ' + logSelectedValue({ currentTarget: currentTarget}));

});

/********************************
 Unit Test for addToList
 ********************************/
module( "Add To List Test" );
test( "addToList Test", 2, function() {
  // Verify the method exists
  equal( typeof addToList, 'function', 'Must contain a addToList function' );

  // create list element and add it to qunit-fixtures element
  var container = document.getElementById('qunit-fixture');
  // clear container to prevent issues from other test
  container.innerHTML = '';
  var list = document.createElement("ul");
  list.id = 'list1';
  container.appendChild(list);

  // run the function
  addToList();

  // get the new list items
  var items = document.getElementById('list1').getElementsByTagName("li");

  equal(items.length, 5, 'Expected 5 list items, the result was: ' + items.length);

});


/********************************
 Unit Test for createControls & updateCheckboxState
 ********************************/
module( "Create Controls Test" );
test( "createControls Test", 7, function() {
  // Verify the method exists
  equal( typeof createControls, 'function', 'Must contain a createControls function' );
  equal( typeof updateCheckboxState, 'function', 'Must contain a updateCheckboxState function' );

  // clear container to prevent issues from other test
  document.getElementById('qunit-fixture').innerHTML = '';

  var container = document.createElement('div');
  container.id = 'foobar';
  document.getElementById('qunit-fixture').appendChild(container);

  // run the function
  createControls();

  var inputs = document.getElementById('foobar').getElementsByTagName('input');

  // test for the checkboxes
  equal(inputs.length, 4, 'Expected 4 checkboxes, the result was: ' + inputs.length);

  // test for the activate link element
  equal(typeof document.getElementById("link-activate"), 'object', 'Expected activate link element, the result was: ' + document.getElementById("link-activate"));

  // test for the deactivate link element
  equal(typeof document.getElementById("link-deactivate"), 'object', 'Expected deactivate link element, the result was: ' + document.getElementById("link-deactivate"));

  // create test data off of the elements created for the previous test
  var currentTarget = document.getElementById('link-activate');

  // test the updateing checkboxes to be active
  updateCheckboxState({ currentTarget: currentTarget, preventDefault: function () {} });
  equal($("#foobar input[type=checkbox]:checked").length, 4, 'Expected 4 checked inputs, the result was: ' + $("#foobar input[type=checkbox]:checked").length);

  // create test data off of the elements created for the previous test
  var currentTarget = document.getElementById('link-deactivate');

  // test the updateing checkboxes to be deactivate
  updateCheckboxState({ currentTarget: currentTarget, preventDefault: function () {} });
  equal($("#foobar input[type=checkbox]:checked").length, 0, 'Expected 0 checked inputs, the result was: ' + $("#foobar input[type=checkbox]:checked").length);

});
