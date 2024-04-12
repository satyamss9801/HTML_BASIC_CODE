package main

import (
	"log"
	"net/http"
)

func main() {
    fileserver := http.FileServer(http.Dir("./display"))
    http.Handle("/", fileserver)

    /*http.HandleFunc("/form", func(w http.ResponseWriter, r *http.Request) {
        if r.Method != "POST" {
            fmt.Fprintln(w, "Invalid method")
            return
        }

        err := r.ParseForm()
        if err != nil {
            fmt.Fprintf(w, "ParseForm() err: %v", err)
            return
        }

        fname := r.FormValue("fname")
        lname := r.FormValue("lname")

        fmt.Fprintf(w, "Fullname = %s", fname + " " + lname)
    })*/

    err := http.ListenAndServe(":8080", nil)
    if err != nil {
        log.Fatalln(err)
    }
}