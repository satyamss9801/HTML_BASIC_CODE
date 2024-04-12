package main

import (
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

func dataHandler(w http.ResponseWriter, r *http.Request) {
	err := r.ParseMultipartForm(2000000)
	if err != nil {
		log.Fatal("Error parsing form: ", err)
		return
	}

	f, h, err := r.FormFile("file")
	if err != nil {
		log.Fatal(err)
	}

	byte, err := ioutil.ReadAll(f)
	if err != nil {
		log.Fatal("Failed reading file ", h.Filename, " err: ", err)
	}

	file, err := os.Create("a.jpg")
	if err != nil {
		log.Fatal("Failed to create file a.jpg: ", err)
	}

	_, err = file.Write(byte)
	if err != nil {
		log.Fatal("Failed to write into file a.jpg: ", err)
	}
}

func main() {
	http.Handle("/", http.FileServer(http.Dir(".")))
	http.HandleFunc("/data", dataHandler)

	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal(err)
	}
}
