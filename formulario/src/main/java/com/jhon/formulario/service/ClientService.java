package com.jhon.formulario.service;


import com.jhon.formulario.dto.ClientDTO;
import com.jhon.formulario.model.Client;
import com.jhon.formulario.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ClientService {

    private final ClientRepository clientRepository;

    @Autowired
    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public Client registerClient(ClientDTO clientDTO) {
        if (clientRepository.existsByCpf(clientDTO.getCpf())) {
            throw new IllegalArgumentException("CPF já cadastrado");
        }

        if (clientRepository.existsByEmail(clientDTO.getEmail())) {
            throw new IllegalArgumentException("Email já cadastrado");
        }

        Client client = new Client();
        client.setName(clientDTO.getName());
        client.setCpf(clientDTO.getCpf());
        client.setEmail(clientDTO.getEmail());
        client.setFavoriteColor(clientDTO.getFavoriteColor());
        client.setObservations(clientDTO.getObservations());

        return clientRepository.save(client);
    }

    public List<ClientDTO> getAllClients() {
        return clientRepository.findAll().stream()
                .map(client -> new ClientDTO(
                        client.getName(),
                        client.getCpf(),
                        client.getEmail(),
                        client.getFavoriteColor(),
                        client.getObservations()
                ))
                .collect(Collectors.toList());
    }
}