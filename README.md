# Battleship

I intend to build a Battleship game to practice Test Driven Development (TDD).

## Overview

Battleship is a game where two players each have a set of ships which they place on the board, and then take turns guessing where the other player has placed their ships. The objective of the game is to destroy your opponent's ships before they destroy yours.

## Rules

### Setup

- Each player has a 10x10 grid
- Individual squares in the grid are identified by letter and number
- Before starting the game, each player secretly arranges their ships on their grid
- Each ship occupies a number of consecutive s2quares on the grid, arranged either horizontally or vertically
- The number of squares for each ship is determined by the type of ship
- The ships cannot overlap or be place diagonally
- Each player has the same types and number of ships
- After the ships have been placed the game proceeds in a series of rounds

### Ships

| No. | Class of ship | Size |
| :-- | :------------ | :--: |
| 1   | Carrier       |  5   |
| 2   | Battleship    |  4   |
| 3   | Destroyer     |  3   |
| 4   | Submarine     |  3   |
| 5   | Patrol Boat   |  2   |

### Round

- In each round, each player announces a target square in the opponent's grids which is to be shot at
- The opponent announces whether or not the square is occupied by a ship
- A hit is designated by an "X" marker
- A miss is designated by a "o" marker
- When all squares of a ship are hit, the opposing player is made aware of which type of ship was sunk

## Sources

1. https://en.wikipedia.org/wiki/Battleship_(game)
