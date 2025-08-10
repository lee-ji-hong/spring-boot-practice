package restapi.prac.model;

import jakarta.persistence.*;

@Entity
public class Post {
    @Id //PK(기본키) 지정
    @GeneratedValue(strategy = GenerationType.IDENTITY) //mysql에서 자동으로 아이디 값을 올라가게 설정했다는 의미
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String content; //보통 컬럼은 private로 지정하여 외부에서 control하지 못하도록 함(캡슐화)

    // 기본 생성자
    public Post() {}

    // 생성자
    public Post(String title, String content) {
        this.title = title;
        this.content = content;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content){
        this.content = content;
    }
}
