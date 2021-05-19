import fire from '../fire';

const firestore = fire.firestore();
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

// Input date format needs to be YYYY-MM-DD
// Stat input should either be "case", "test" or "vaccination"
export function UpdateStats(date, stat) {

    var splitDate = date.split("-");
    var dateKey = splitDate[2] +"-"+ splitDate[1] +"-"+ splitDate[0]
    
    const dateDocRef = firestore.collection("statistics").doc(dateKey);
    dateDocRef.get().then((doc) => {

        if (doc.exists) { // When a record exists update the count
            console.log("exists") //delete
            
            if (stat == "case") {
                dateDocRef.update({ NewCases: doc.data().NewCases + 1 })
                .catch((error) =>{ console.error("Error updating document: ", error) })
            } else if (stat == "test") {
                dateDocRef.update({ NewTests: doc.data().NewTests + 1 })
                .catch((error) =>{ console.error("Error updating document: ", error) })
            } else if (stat == "vaccination") {
                dateDocRef.update({ NewVaccinations: doc.data().NewVaccinations + 1 })
                .catch((error) =>{ console.error("Error updating document: ", error) })
            } else {
                console.log("Error incorrect string given to AddStat")
            }

        } else {    // When theres no record of the date specified create one
            console.log("doesn't exist") //delete

            // Random number for tests
            var randNum = Math.floor(Math.random() * 10000);
            
            var dateObj = new Date(date);
            var formattedDate = days[dateObj.getDay()] +" "+ splitDate[2] +" "+ months[dateObj.getMonth()] +" "+ splitDate[0]
            var cases = 0, tests = randNum, vaccinations = 0
            if (stat == "case") {
                cases = 1;
            } else if (stat == "test") {
                tests = 1;
            } else if (stat == "vaccination") {
                vaccinations = 1;
            } else {
                console.log("Error incorrect string given to AddStat")
            }
            dateDocRef.set({
                NewCases: cases,
                NewTests: tests,
                NewVaccinations: vaccinations,
                FormattedDate: formattedDate
            })
            .catch(function(error) {
                console.log("Error:", error);
            });
        }
    })
    .then(() =>{    // Update total count

        const totalsDocRef = firestore.collection("statistics").doc("Totals");
        totalsDocRef.get().then((doc) => {
            if (doc.exists) {
                if (stat == "case") {
                    totalsDocRef.update({ TotalCases: doc.data().TotalCases + 1 })
                    .catch((error) =>{ console.error("Error updating document: ", error) })
                } else if (stat == "test") {
                    totalsDocRef.update({ TotalTests: doc.data().TotalTests + 1 })
                    .catch((error) =>{ console.error("Error updating document: ", error) })
                } else if (stat == "vaccination") {
                    totalsDocRef.update({ TotalVaccinations: doc.data().TotalVaccinations + 1 })
                    .catch((error) =>{ console.error("Error updating document: ", error) })
                } else {
                    console.log("Error incorrect string given to AddStat")
                }
            } else {
                console.log("Error getting totals document")
            }
        }).catch((error) =>{
            console.log("Error getting document: " + error)
        })

    })
    .catch((error) => {
        console.log("Error getting document:", error);
    });

}
