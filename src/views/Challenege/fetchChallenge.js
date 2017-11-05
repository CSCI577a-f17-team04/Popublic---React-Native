/**
 *
 * fetchChallenge Modul for get data  with server
 *
 * SERVER is et in src/config/server
 *
 */
import React from 'react';

import { AsyncStorage } from 'react-native';

//Config
import { SERVER } from '../config/server';
import Hash from 'sha256';
import * as challenegAPI from "../../src/constant/string"

export const FetchChallenge = function(dataType){
    let url = null;
    var request = null;
    switch (dataType){
        case challenegAPI.getChallenge:
            url = `${SERVER}/${challenegAPI.getChallenge}`;
            request = generateRequest(challenegAPI.getChallenge);
            break;

        case challenegAPI.getUpcomingChallenges:
            url = `${SERVER}/${challenegAPI.getUpcomingChallenges}`;
            request = generateRequest(challenegAPI.getUpcomingChallenges);
            break;

        case challenegAPI.isMatched:
            url = `${SERVER}/${challenegAPI.isMatched}`;
            request = generateRequest(challenegAPI.isMatched);
            break;

        case challenegAPI.competitorCandidates:
            url = `${SERVER}/${challenegAPI.competitorCandidates}`;
            request = generateRequest(challenegAPI.competitorCandidates);
            break;

        case challenegAPI.invitedFriends:
            url = `${SERVER}/${challenegAPI.invitedFriends}`;
            request = generateRequest(challenegAPI.invitedFriends);
            break;

        case "getCompetitor":
            url = `${SERVER}/getCompetitor`;
            break;


        case "getUser":
            url =`${SERVER}/isMatched`;
            break;

        case "approved":
            url =`${SERVER}/isMatched`;
            break;
        default : url = null;
        break;
    }

    //url = "http://localhost:80/"
    return fetch(url,request).then((response) => response.json()).then((responseJson) => {
      console.log("original data: "+ responseJson);
        return responseJson;
    }).catch(error => {
            throw  error
        });
};

var generateRequest = ( dataType, input1="test2", input2, input3 ) =>{
    let date = (new Date().getMonth()+1)+"-"+(new Date().getDate())+"-"+(new Date().getFullYear());

    switch (dataType){
        case challenegAPI.getChallenge:
            var request = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },body: JSON.stringify({
                    date: "10-20-2017",//date,
                }),
            };
            return request;
            break;

        case challenegAPI.getUpcomingChallenges:
            var request = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },body: JSON.stringify({
                    date: "10-20-2017",//date,
                }),
            };
            return request;
            break;
            
        case challenegAPI.isMatched:
            var request = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },body: JSON.stringify({
                    username: "test2",//username,
                    //date: "10-20-2017",//date,
                }),
            };
            return request;
            break;

        case challenegAPI.competitorCandidates:
            var request = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },body: JSON.stringify({
                    challengee: input1,//username,
                    date: "10-20-2017",
                }),
            };
            return request;
            break;

        case challenegAPI.invitedFriends:
            var request = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },body: JSON.stringify({
                    username: input1,//username,
                    date: "10-20-2017",
                }),
            };
            return request;
            break;

        default:
            var request = null;
            return null;
            break;

    }
}
