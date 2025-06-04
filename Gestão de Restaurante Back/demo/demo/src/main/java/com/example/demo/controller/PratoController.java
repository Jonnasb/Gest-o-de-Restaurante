package com.example.demo.controller;


import com.example.demo.model.Prato;
import com.example.demo.repository.PratoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/pratos")
public class PratoController {

    private  final PratoRepository pratoRepository;

    public PratoController(PratoRepository pratoRepository) {
        this.pratoRepository = pratoRepository;
    }

    @GetMapping
    public List<Prato> listarPratos() {
        return pratoRepository.findAll();
    }

    @PostMapping
    public Prato cadastrarPratos(@RequestBody Prato prato) {
        return pratoRepository.save(prato);
    }

    @GetMapping("/{id}")
    public Prato buscarPorId(@PathVariable Long id) {
        return pratoRepository.findById(id).orElse(null);
    }
}
