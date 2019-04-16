#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
#include <iostream>

using namespace std;

const int MAX_PLAYERS = 4;
//NOTE: Compile with --> g++ sample.cc -o sample.exe
//      Run with --> sample.exe

int main(/*int argc, char ** argv*/) {
    printf("Hello! Welcome to a sample game loop for Sneaky Stikers!\n");
    sleep(1);   //Simulate setup processing and/or forced wait time

    int movePoints = 3;
    int playerNo = 1;
    char input;

    //First Turn
    printf("Moving to player 1\n\n");

    while(1) {
        //Game Loop
        if(movePoints > 0) {
            printf("# Moves Left: %d\n", movePoints);
            printf("Which way would you like to move?\nEnter WASD: ");
            cin >> input;
            while(input != 'W' && input != 'w' && input != 'A' && input != 'a'
            && input != 'S' && input != 's' && input != 'D' && input != 'd') {
                //Basic input validation
                printf("Invalid direction.\nWhich way would you like to move?\nEnter WASD: ");
                cin >> input;
            }
            switch(input) {
                case 'w':
                case 'W':
                    printf("Moving UP\n\n");
                    break;
                case 'a':
                case 'A':
                    printf("Moving LEFT\n\n");
                    break;
                case 's':
                case 'S':
                    printf("Moving DOWN\n\n");
                    break;
                case 'd':
                case 'D':
                    printf("Moving RIGHT\n\n");
                    break;
                default:
                    printf("Invalid key\n\n");
            }
            movePoints--;
        } else {
            movePoints = 3;
            playerNo = (playerNo % MAX_PLAYERS) + 1;  //Player 1-4
            printf("Moving to player %d\n\n", playerNo);
        }
        sleep(1);   //Simulate processing time and/or forced wait time.
    }
    exit(0);
}
