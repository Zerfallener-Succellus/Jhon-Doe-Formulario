package com.jhon.formulario.service;

import com.jhon.formulario.dto.ClientDTO;
import com.jhon.formulario.model.Client;
import com.jhon.formulario.repository.ClientRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ClientServiceTest {

    @Mock
    private ClientRepository clientRepository;

    @InjectMocks
    private ClientService clientService;

    private ClientDTO clientDTO;
    private Client client;

    @BeforeEach
    void setUp() {
        clientDTO = new ClientDTO("John Doe", "12345678901", "john@example.com", "Azul", "Nenhuma");
        client = new Client(1L, "John Doe", "12345678901", "john@example.com", "Azul", "Nenhuma");
    }

    @Test
    void shouldRegisterClientSuccessfully() {
        when(clientRepository.existsByCpf(clientDTO.getCpf())).thenReturn(false);
        when(clientRepository.existsByEmail(clientDTO.getEmail())).thenReturn(false);
        when(clientRepository.save(any(Client.class))).thenReturn(client);

        Client savedClient = clientService.registerClient(clientDTO);

        assertNotNull(savedClient);
        assertEquals(client.getCpf(), savedClient.getCpf());
        assertEquals(client.getEmail(), savedClient.getEmail());
        verify(clientRepository, times(1)).save(any(Client.class));
    }

    @Test
    void shouldThrowExceptionWhenCpfAlreadyExists() {
        when(clientRepository.existsByCpf(clientDTO.getCpf())).thenReturn(true);

        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            clientService.registerClient(clientDTO);
        });

        assertEquals("CPF já cadastrado", exception.getMessage());
    }

    @Test
    void shouldThrowExceptionWhenEmailAlreadyExists() {
        when(clientRepository.existsByEmail(clientDTO.getEmail())).thenReturn(true);

        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            clientService.registerClient(clientDTO);
        });

        assertEquals("Email já cadastrado", exception.getMessage());
    }

    @Test
    void shouldGetAllClientsSuccessfully() {
        when(clientRepository.findAll()).thenReturn(List.of(client));

        List<ClientDTO> clients = clientService.getAllClients();

        assertFalse(clients.isEmpty());
        assertEquals(1, clients.size());
        assertEquals(clientDTO.getEmail(), clients.get(0).getEmail());
    }
}
