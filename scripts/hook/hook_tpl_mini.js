function miniLog(methodname, arg_type, arg_dump, ret_type, retvar){
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
    console.log('[+]' + methodname + "(" + arg_type + ")");
    console.log("Return: (" + ret_type + ")" + retvar);
    console.log(arg_dump)
}

setTimeout(function() {
    Java.perform(function() {
    	console.log("In da house..hook_tpl_mini.js\n");
{{scripts}}
        // dyloadscript
{{dyloadscript}}
    });
}, 0);

{{native_scripts}}