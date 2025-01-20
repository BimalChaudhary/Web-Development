// The Magical Sorting Hat. Imagine you are creating a megical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less then 6), Hufflepuff (length less then 8), Ravenclaw (length less then 12), or Slytherin (length greater than or equal to 12)) based on the length of their names.


    let students = ["Bimal", "Chakra", "Sangita", "Binu", "Bir", "Durga", "Kuber", "Dinesh", "Kali", "Mina", "Rakesh", "Ramesh", "Saru", "Sarita", "Sabin", "Philip", "Lal", ];
    let houses = [];
    for (const student of students) {
        if(student.length < 6){
            houses.push(`Gryffindor : ${student}`);
        }   
        else if(student.length<8){
            houses.push(`Hufflepuff : ${student}`);
        }
        else if(student.length<12){
            houses.push(`Ravenclaw : ${student}`);
        }
        else {
            houses.push(`Slytherin : ${student}`);
        }
    }
    console.log(houses);