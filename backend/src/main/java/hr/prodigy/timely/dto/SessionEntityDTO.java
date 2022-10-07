package hr.prodigy.timely.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class SessionEntityDTO {

    private Long id;
    private String name;
    private LocalDateTime start;
    private LocalDateTime end;
}
