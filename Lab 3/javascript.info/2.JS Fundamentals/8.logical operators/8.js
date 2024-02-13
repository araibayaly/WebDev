if (-1 || 0) alert( 'first' ); // executes, -1, truthy 
if (-1 && 0) alert( 'second' ); //doesn't execute, 0, falsy
if (null || -1 && 1) alert( 'third' ); // executes, null || 1  ->  1