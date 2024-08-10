# Local Network Printing Server

This project sets up a local network printing server using Node.js and the `escpos` library. The server listens for HTTP requests to print receipts on an ESC/POS-compatible printer over the network.

## Features

- Handles print requests from a web application.
- Connects to a network printer using its IP address.
- Supports printing receipts with itemized details.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)
- NPM (comes with Node.js)
- An ESC/POS-compatible network printer

## Installation

1. **Install Depencies**

   npm install

1. **Start Server**

   node server.js
