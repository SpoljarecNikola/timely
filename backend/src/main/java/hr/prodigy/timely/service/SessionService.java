package hr.prodigy.timely.service;

import hr.prodigy.timely.dto.SessionEntityDTO;
import hr.prodigy.timely.entity.SessionEntity;

import java.util.List;
import java.util.Optional;

public interface SessionService {
    List<SessionEntityDTO> findAllSession();
    Optional<SessionEntityDTO> findById(Long id);
    SessionEntityDTO saveSession(SessionEntityDTO sessionEntityDTO);
    SessionEntityDTO updateSession(SessionEntityDTO sessionEntityDTO);
    void deleteSession(Long id);
}
