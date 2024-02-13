alert( 6.35.toFixed(1) ); // 6.3
//precision loss can cause both increase and decrease of a number
alert( Math.round(6.35 * 10) / 10 ); // 6.35 -> 63.5 -> 64(rounded) -> 6.4