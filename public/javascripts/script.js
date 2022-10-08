function cal(){

    value1 = parseFloat(document.getElementById("val1").value) ;

    InrToUsd = (value1*0.013).toFixed(2);
    InrToJpy = (value1*1.79).toFixed(2);
    InrToEur = (value1*0.013).toFixed(2);
    InrToGbp = (value1*0.011).toFixed(2);
    InrToAud = (value1*0.019).toFixed(2);
    InrToCad = (value1*0.017).toFixed(2);
    InrToChf = (value1*0.012).toFixed(2);
    InrToCnh = (value1*0.088).toFixed(2);
    InrToHkd = (value1*0.098).toFixed(2);
    InrToNzd = (value1*0.021).toFixed(2);

    document.getElementById('usd').innerHTML = InrToUsd;
    document.getElementById('jpy').innerHTML = InrToJpy;
    document.getElementById('eur').innerHTML = InrToEur;
    document.getElementById('gbp').innerHTML = InrToGbp;
    document.getElementById('aud').innerHTML = InrToAud;
    document.getElementById('cad').innerHTML = InrToCad;
    document.getElementById('chf').innerHTML = InrToChf;
    document.getElementById('cnh').innerHTML = InrToCnh;
    document.getElementById('hkd').innerHTML = InrToHkd;
    document.getElementById('nzd').innerHTML = InrToNzd;

}

