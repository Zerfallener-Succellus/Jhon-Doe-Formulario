package com.jhon.formulario.repository;


import com.jhon.formulario.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {
    boolean existsByCpf(String cpf);
    boolean existsByEmail(String email);
    Optional<Client> findByCpf(String cpf);
}