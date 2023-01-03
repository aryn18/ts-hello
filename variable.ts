function doSomething(){
    for(var i = 0; i < 5; i++){
        console.log(i);
    }

    console.log('Finally: ' + i);
}

doSomething();

// if we put let in the place of var it generates error on line 6 but didn't create any problem in js file.