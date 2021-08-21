// let res ;

// console.log(res);

const API = {  
    
    async getLastWorkout() {
      try {
        const res = await fetch("/api/workout");
        const json = await res.json();
        return json[json.length - 1];
      } catch (err) {
        console.log(err) 
      }
    }, 
    
    async addExercise(data) {
      const id = location.search.split("=")[1];
  
      const res = await fetch("/api/workout/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
  
      const json = await res.json();
  
      return json;
    },
    async createWorkout(data = {}){ try{ 
      const res =  await fetch("/api/workout", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      }); 
      const json = await res.json(); 
      return json;
    }catch (err) {
      console.log(err) 
    }
      
     
    },
  
    async getWorkoutsInRange() {
      const res = await fetch(`/api/workout/range`);
      const json = await res.json();
  
      return json;
    }, 
    
  };