package com.jhon.formulario.conttroller;


import com.jhon.formulario.dto.ClientDTO;
import com.jhon.formulario.model.Client;
import com.jhon.formulario.service.ClientService;
import com.jhon.formulario.util.ResponseUtil;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/clients")
public class ClientController {

    private final ClientService clientService;

    @Autowired
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @PostMapping
    public ResponseEntity<?> registerClient(@Valid @RequestBody ClientDTO clientDTO, BindingResult result) {
        if (result.hasErrors()) {
            return ResponseUtil.badRequest(result);
        }

        try {
            Client savedClient = clientService.registerClient(clientDTO);

            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Cliente cadastrado com sucesso");
            response.put("client", savedClient);

            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (IllegalArgumentException e) {
            return ResponseUtil.badRequest(e.getMessage());
        } catch (Exception e) {
            return ResponseUtil.internalServerError("Erro ao processar o cadastro");
        }
    }


    @GetMapping("/getallclients")
    public List<ClientDTO> getAllClients() {
        return clientService.getAllClients();
    }
}
