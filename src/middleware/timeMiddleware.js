const date= new Date();
let counter =0;
let setTime =(req, res, next) => {
    req.time=" hr "+date.getHours()+" mns "+date.getMinutes();
    next();
}

module.exports = setTime;