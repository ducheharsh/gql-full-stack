import { RESTDataSource } from "@apollo/datasource-rest";
import { Author, Track } from "../types";
import { AuthorModel, TrackModel } from "../models";

export class TrackAPI extends RESTDataSource{
    baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/"

    getTracksForHome(){
        return this.get<TrackModel[]>("tracks");
    }

    getAuthor(authorId: string){ 
        return this.get<AuthorModel>(`author/${authorId}`);
    }
}