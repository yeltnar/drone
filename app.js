const {exec, execFile, spawn} = require("child_process");

const child = spawn('python3', ['Tello3.py']);

child.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

(async ()=>{

    await timeoutPromise( 500 );
    console.log("command\n");
    child.stdin.write("command\n");

    await timeoutPromise( 2000 );
    console.log("takeoff\n");
    child.stdin.write("takeoff\n");

    await timeoutPromise( 7000 );
    // console.log("cw 3600\n");
    // child.stdin.write("cw 360\n");
    console.log("flip b\n");
    child.stdin.write("flip b\n");

    await timeoutPromise( 10000 );
    console.log("land\n");
    child.stdin.write("land\n");

    await timeoutPromise( 1000 );
    child.stdin.write("end\n");

    //await timeoutPromise( 5000 );

    //child.kill()


})()



function timeoutPromise( time ){
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{

            resolve();
            
        }, time);

    })
}