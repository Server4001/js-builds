let doWork = function(name = "Brice") {
    console.log(name);
};
doWork("Billy"); //> "Billy"
doWork(); //> "Brice"
doWork(undefined); //> "Brice"
doWork(null); //> null
