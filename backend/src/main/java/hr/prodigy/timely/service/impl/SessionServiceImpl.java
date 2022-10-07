package hr.prodigy.timely.service.impl;

import hr.prodigy.timely.dto.SessionEntityDTO;
import hr.prodigy.timely.entity.SessionEntity;
import hr.prodigy.timely.repository.SessionRepository;
import hr.prodigy.timely.service.SessionService;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class SessionServiceImpl implements SessionService {

    @Autowired
    private final SessionRepository sessionRepository;

    @Autowired
    private ModelMapper modelMapper;

    public SessionServiceImpl(SessionRepository sessionRepository) {
        this.sessionRepository = sessionRepository;
    }

    @Override
    public List<SessionEntityDTO> findAllSession() {

        return sessionRepository.findAll()
                .stream()
                .map(this::convertEntityToDto)
                .collect(Collectors.toList());
    }

    @Override
    public Optional<SessionEntityDTO> findById(Long id) {
        SessionEntity sessionEntity = sessionRepository.findById(id).orElse(null);
        return Optional.ofNullable(convertEntityToDto(sessionEntity));
    }

    @Override
    public SessionEntityDTO saveSession(SessionEntityDTO sessionEntityDTO) {
        SessionEntity sessionEntity = convertDtoToEntity(sessionEntityDTO);
        sessionEntity = sessionRepository.save(sessionEntity);
        return convertEntityToDto(sessionEntity);
    }

    @Override
    public SessionEntityDTO updateSession(SessionEntityDTO sessionEntityDTO) {
        Long sessionId = sessionEntityDTO.getId();
        SessionEntity sessionToUpdate = sessionRepository.findById(sessionId).get();
        sessionToUpdate.setName(sessionEntityDTO.getName());
        sessionToUpdate = sessionRepository.save(sessionToUpdate);
        return convertEntityToDto(sessionToUpdate);
    }


    @Override
    public void deleteSession(Long id) {
        sessionRepository.deleteById(id);
    }

    private SessionEntityDTO convertEntityToDto(SessionEntity sessionEntity){
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        SessionEntityDTO sessionEntityDTO = new SessionEntityDTO();
        sessionEntityDTO = modelMapper.map(sessionEntity, SessionEntityDTO.class);
        return sessionEntityDTO;
    }

    private SessionEntity convertDtoToEntity(SessionEntityDTO sessionEntityDTO){
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        SessionEntity sessionEntity = new SessionEntity();
        sessionEntity = modelMapper.map(sessionEntityDTO, SessionEntity.class);
        return sessionEntity;
    }
}
