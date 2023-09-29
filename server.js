const http = require('http');
const fs = require('fs');
http.createServer((req, resp) => {
    if (req.url === '/redirect') {
        // Redirect to another page
        resp.writeHead(302, { 'Location': '/another' });
        resp.end();
    } else if (req.url === '/another') {
        // Serve another HTML page
        fs.readFile('Another_page.html', function (err, html) {
            if (err) {
                resp.writeHead(500, { 'Content-Type': 'text/plain' });
                resp.write('Internal Server Error');
                resp.end();
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(html);
                resp.end();
            }
        });
    } else {
        // Serve employee.html
        fs.readFile('employee.html', function (err, html) {
            if (err) {
                resp.writeHead(500, { 'Content-Type': 'text/plain' });
                resp.write('Internal Server Error');
                resp.end();
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(html);
                resp.end();
            }
        });
    }
}).listen(7000, () => {
    console.log('Server is running on port 7000');
});