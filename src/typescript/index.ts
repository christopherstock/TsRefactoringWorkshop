
    import KEY from './Key';
    ( window as any ).KEY = KEY;

    require( "./stats.js"  );
    require( "./common.js" );
    require( "./game.js"   );

    console.log( 'index.ts invoked' );

    window.onload = () => {

        console.log( 'Window.onload invoked' );


    };
