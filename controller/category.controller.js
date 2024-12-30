import { CategoryServices } from "../services/category.services.js";

export const createBulk = async (request, response, next) => {
    try{
      
        let status = CategoryServices.createBulk(request.body);
        if(status){
            response.send("Data inserted");
        }else{
            response.send("Error while inserting");
        }

    }catch(err){
        console.log(err);
    }
}