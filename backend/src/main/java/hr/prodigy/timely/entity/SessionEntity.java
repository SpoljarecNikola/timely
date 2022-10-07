package hr.prodigy.timely.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="session")
public class SessionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "session_id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "start_dt")
    private LocalDateTime start;

    @Column(name = "end_dt")
    private LocalDateTime end;

}
