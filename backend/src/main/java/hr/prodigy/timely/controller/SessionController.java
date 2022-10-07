package hr.prodigy.timely.controller;

import hr.prodigy.timely.dto.SessionEntityDTO;
import hr.prodigy.timely.entity.SessionEntity;
import hr.prodigy.timely.service.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/session")
public class SessionController {

    @Autowired
    private final SessionService sessionService;

    public SessionController(SessionService sessionService){
        this.sessionService = sessionService;
    }

    @GetMapping
    public List<SessionEntityDTO> findAllSession(){
        return sessionService.findAllSession();
    }

    @GetMapping("/{id}")
    public Optional<SessionEntityDTO> findSessionById(@PathVariable("id") Long id){
        return sessionService.findById(id);
    }

    @PostMapping
    public SessionEntityDTO saveSession(@RequestBody SessionEntityDTO sessionEntityDTO){
        return sessionService.saveSession(sessionEntityDTO);
    }

    @PutMapping
    public SessionEntityDTO updateSession(@RequestBody SessionEntityDTO sessionEntityDTO){
        return sessionService.updateSession(sessionEntityDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteSession(@PathVariable("id") Long id){
        sessionService.deleteSession(id);
    }
}
