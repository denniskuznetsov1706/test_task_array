let _ = require( 'wTesting' )

let attempt = require( './attempt' )

function Test1 ( test )
{
  /* one element in preffered */
  test.case = 'Test #1';
  var got = attempt.attempt( [ 240, 360, 720 ], [ 360, 720 ], [ 1080 ] )
  var expected = [ 360 ];
  test.identical( got, expected );

  test.case = 'Test #2'
  var got = attempt.attempt( [ 240, 720 ], [ 360, 720 ], [ 1080 ] )
  var expected = [ 720 ]
  test.identical( got, expected )

  test.case = 'Test #3'
  var got = attempt.attempt( [ 240 ], [ 360, 720 ], [ 1080 ] )
  var expected = []
  test.identical( got, expected )
}

function Test2 ( test )
{
  /* more than one element in preffered */
  test.case = 'Test #4'
  var got = attempt.attempt( [ 240, 360, 720 ], [ 240, 360, 720, 1080 ], [ 240, 360 ] )
  var expected = [ 240, 360 ]
  test.identical( got, expected )

  test.case = 'Test #5'
  var got = attempt.attempt( [ 240, 720 ], [ 240, 360, 720, 1080 ], [ 240, 360 ] )
  var expected = [ 240, 720 ]
  test.identical( got, expected )

  test.case = 'Test #6'
  var got = attempt.attempt( [ 240, 720 ], [ 240, 360, 1080 ], [ 240, 360 ] )
  var expected = [ 240 ]
  test.identical( got, expected )

  test.case = 'Test #7'
  var got = attempt.attempt( [ 720 ], [ 240, 360, 1080 ], [ 240, 360 ] )
  var expected = []
  test.identical( got, expected )

  test.case = 'Test #8'
  var got = attempt.attempt( [ 240, 360 ], [ 240, 360 ], [ 720, 1080 ] )
  var expected = [ 360 ]
  test.identical( got, expected )
}

function Test3 ( test )
{
  /* element has 'any'*/
  test.case = 'Test #9'
  var got = attempt.attempt( [ 240, 360, 720 ], [ 360, 'any' ], [ 360, 720 ] )
  var expected = [ 360, 720 ]
  test.identical( got, expected )

  test.case = 'Test #10'
  var got = attempt.attempt( [ 240, 360, 720 ], [ 240, 360, 720 ], [ 'any', 720 ] )
  var expected = [ 240, 360, 720 ]
  test.identical( got, expected )

  test.case = 'Test #11'
  var got = attempt.attempt( [ 240, 360, 720 ], [ 360, 1080 ], [ 'any', 720 ] )
  var expected = [ 360 ]
  test.identical( got, expected )

  test.case = 'Test #12'
  var got = attempt.attempt( [ 240, 360, 720 ], [ 1080 ], [ 'any', 720 ] )
  var expected = []
  test.identical( got, expected )

  test.case = 'Test #13'
  var got = attempt.attempt( [ 240, 360, 720 ], [ 360, 720 ], [ 'any' ] )
  var expected = [ 360, 720 ]
  test.identical( got, expected )
}
function Test4 ( test )
{
  /* little bit of my tests */
  test.case = 'Test #14'
  var got = attempt.attempt( [ 240, 360 ], [ 240, 360 ], [ 360, 720, 1080 ] )
  var expected = [ 360 ]
  test.identical( got, expected )

  test.case = 'Test #15'
  var got = attempt.attempt( [ 240, 360 ], [ 240, 360 ], [ 240, 360, 720, 1080 ] )
  var expected = [ 240, 360 ]
  test.identical( got, expected )

}

var testSuite = {
  name : 'test_tast_array',
  tests : {
    Test1,
    Test2,
    Test3,
    Test4
  }
}

/* Initilize test suit */
testSuite = wTestSuite( testSuite )
if( typeof module !== 'undefined' && !module.parent )
  /* Run all tests of the suit */
  wTester.test( testSuite.name )
