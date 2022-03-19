function calculate(){
    let heads = parseInt(document.getElementById("heads").value)
    let tails = parseInt(document.getElementById("tails").value)

    let good = probability(.5, .5, heads, tails) // Math.pow(0.5, heads+tails)
    let bad = probability(.75, .25, heads, tails) //Math.pow(0.75, heads) * Math.pow(0.25, tails)

    let fair = good/(good+bad)
    let unfair = bad/(good + bad)

    //document.getElementById("good").innerHTML = (good.toPrecision(3) * 100).toPrecision(3) + " %"
    //document.getElementById("bad").innerHTML = (bad.toPrecision(3) * 100).toPrecision(3) + " %"
    document.getElementById("good").innerHTML = (fair.toPrecision(3) * 100).toPrecision(3) + " %"
    document.getElementById("bad").innerHTML = (unfair.toPrecision(3) * 100).toPrecision(3) + " %"
    console.log(`fair: ${fair}, unfair: ${unfair}`)
    console.log("caluculating")

}

function binomial(n, k){
    return factorial(n)/(factorial(n-k)*factorial(k))
}

function probability(pA, pB, a, b){
    return factorial(a+b)/factorial(a)/factorial(b) * Math.pow(pA, a) * Math.pow(pB, b)
}


function factorial(n) {
    let ans=1;
      
    for (let i = 2; i <= n; i++)
        ans = ans * i;
    return ans;
}