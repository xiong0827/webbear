function dateformat(dtstr)
{
    const dt=new Date(dtstr);

    const y=dt.getFullYear();
    const n=zero(dt.getMonth()+1);
    const d=zero(dt.getDate());
    const h=zero(dt.getHours());
    const m=zero(dt.getMinutes());
    const s=zero(dt.getSeconds());
    return `${y}-${n}-${d} ${h}:${m}:${s}`
}

function zero(n)
{
  return  n>9?n:0+n
}
module.exports={
    dateformat
}