//After each step, log the value or question / answer.

//1.Declare consts cats and aggregate with the values from #10
const alpha = [];
const beta = [3, 4, 10];
const delta = ['hey', 'there']

const aggregate = [alpha, beta, delta];
console.log(aggregate);

const cats = ['Siamese', 'Calico', 'Maine Coon'];
console.log(cats);
//2.Change the second value(Calico) in cats to Ragdoll

//note: the first 1 will set where you want to insert into the array. The second 1 means from where do you want insert it from
//in this case, we want to replace 'calico', which it is taking the 1 index in the array. so we want to target that arrray.
// in the case that we wanted to insert it inside and not replace, we can do a 0 value.
cats.splice(1, 1, 'Ragdoll')
console.log(cats)

//3.Using indexes, add a fourth value Burmese to cats
cats[3] = 'ragdoll';
console.log(cats)

//or cats.push('ragdoll')
//console.log(cats)

//4.Using indexes, remove the first value from cats
cats.shift();
console.log(cats);
//5. Using indexes on the aggregate array, change the value of the second integer in beta to 37
aggregate.splice(beta, 0, 37)