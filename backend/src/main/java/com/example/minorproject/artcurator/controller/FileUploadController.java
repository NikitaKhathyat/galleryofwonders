package com.example.minorproject.artcurator.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/files")
public class FileUploadController {
    private final String UPLOAD_DIR = "uploads/";

    // UPLOAD FILE
    @PostMapping("/upload")
    public ResponseEntity<String> upload(@RequestParam("file") MultipartFile file) throws Exception {
        String filename = StringUtils.cleanPath(file.getOriginalFilename());
        File dir = new File(UPLOAD_DIR);
        if (!dir.exists()) dir.mkdirs();

        Path path = Path.of(UPLOAD_DIR + filename);
        Files.write(path, file.getBytes());

        return ResponseEntity.ok(filename);
    }

    // GET FILE
    @GetMapping("/{filename}")
    public byte[] getFile(@PathVariable String filename) throws Exception {
        Path path = Path.of(UPLOAD_DIR + filename);
        return Files.readAllBytes(path);
    }
}
