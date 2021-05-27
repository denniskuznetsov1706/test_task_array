
module.exports.attempt = function( available, allowed, preffered ) {
  if ( allowed.includes( 'any' ) ) {
    allowed.splice( allowed.indexOf( 'any' ), 1  ) ;
      for ( let i = available.indexOf( allowed [ 0 ] ) + 1; i < available.length; i++ )
        allowed.push( available [ i ] );
  }    


let intersection = available.filter( x => allowed.includes( x ) );

if ( intersection.length == 0) return [];


switch ( preffered.length ) {
  case 1: //------------------------prefferd with 1 element
    var closet = preffered [ 0 ];
    if ( preffered.includes( 'any' ) ) return intersection;
      for ( let x of intersection )
        if ( x < closet ) {
          closet = x;
          break;
        }
          return [ closet ];
  break;
  case 2: //--------------------preffered with 2 element, also  has any
    var closet = preffered;
    if ( preffered [ 0 ] == 'any' ) {
      if ( intersection.includes( preffered [ 1 ] ) )
        for ( let i = 0; i < intersection.indexOf( preffered [ 1 ] ); i++ )
          closet.push( intersection [ i ] );
        }
    else {
      for ( let x of intersection )
        if ( x < closet ) {
            closet [ 0 ] = x;
            break;
        }
    }
    if ( intersection.length == 1) {
      if ( closet [ 0 ] == 'any' ) closet [ 0 ] = allowed [ 0 ];
      return [ closet [ 0 ] ];   
    }
    if ( preffered [ 0 ] > intersection [ intersection.length-1 ] ) return [ intersection [ intersection.length - 1] ];
    if ( intersection.includes( preffered [ 1 ] ) ) closet [ 1 ] = preffered [ 1 ];
    else for ( let x of intersection )
           if ( preffered [ 1 ] < x ) {
             closet [ 1 ] = x;
             break;
            }
    if ( preffered [ 0 ] == 'any' ) {
      preffered.splice( 0, 1 );
      var a = preffered [ 0 ];
      preffered.splice( 0, 1 );
      preffered.push( a );
    }

    return  closet ;
    break;
}

    return  closet ;
}

