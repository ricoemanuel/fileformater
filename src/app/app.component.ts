import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loader:boolean=false
  onFileChange(ev: any) {
    this.loader=true
    console.log(this.loader)
    let workBook: any = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.onload = async (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial: any, name: any) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet, { range: 5 });
        return initial;
      }, {});
      jsonData["Validate Active Payroll By Dat"].splice(-3, 3)
      let res: any = await fetch('https://formatter-eta.vercel.app/format-json', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData["Validate Active Payroll By Dat"])
      })
      let formattedData = await res.json();

      // Convierte los datos JSON a una hoja de Excel
      const worksheet = XLSX.utils.json_to_sheet(formattedData);

      // Crea un nuevo libro de trabajo y añade la hoja
      const newWorkbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(newWorkbook, worksheet, "Sheet1");

      // Escribe el libro de trabajo a un archivo de Excel
      XLSX.writeFile(newWorkbook, "output.xlsx");
      this.loader=false
    }
    reader.readAsBinaryString(file);
    
  }
  onDragOver(event: any) {
    event.preventDefault();
  }

  onDrop(event: any) {
    event.preventDefault();
    console.log("fwef")
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      this.onFileChange(files[0]);
    }
  }
}
