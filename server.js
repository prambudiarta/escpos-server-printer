const express = require('express');
const cors = require('cors');
const escpos = require('escpos');
escpos.Network = require('escpos-network');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/print', (req, res) => {
  const { printerIP, order } = req.body;

  const device = new escpos.Network(printerIP);
  const printer = new escpos.Printer(device);

  device.open(() => {
    printer
      .font('a')
      .align('ct')
      .style('bu')
      .size(1, 1)
      .text('Order Receipt')
      .text(`Order ID: ${order.orderId}`)
      .text(`Room Rate: ${order.roomRate}`)
      .text('------------------------')
      .text('Items:')
      .align('lt');

    order.itemSummary.items.forEach(item => {
      printer.text(`${item.quantity}x ${item.name} - ${item.price}`);
    });

    printer
      .text('------------------------')
      .text(`Total Items: ${order.itemSummary.totalItems}`)
      .text(`Total Price: ${order.itemSummary.totalPrices}`)
      .cut()
      .close();

    res.send('Print job sent to printer');
  });
});

app.listen(port, () => {
  console.log(`Print server listening at http://localhost:${port}`);
});
