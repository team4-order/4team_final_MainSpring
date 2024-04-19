//package main.spring.login.demo2.repository;
//
//import main.spring.login.demo2.dto.ContactYDto;
//import main.spring.login.demo2.entity.Business;
//import main.spring.login.demo2.entity.Contact;
//import main.spring.login.demo2.entity.OrderMaster;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
//
//import java.util.List;
//
//public interface ContactRepository1 extends JpaRepository<Contact, String> {
//
//    //    @Query("SELECT c FROM Contact c WHERE c.contactDelimiter = 'C'")
//    @Query(value = "SELECT c.* FROM contact c " +
//            "INNER JOIN (SELECT contact_code FROM contact WHERE business_id = ?1) t " +
//            "ON c.contact_code = t.contact_code WHERE c.contact_delimiter ='C'", nativeQuery = true)
//    List<Contact> findByBusinessId(String businessId);// 'C'를 가진 모든 고객을 찾는 메소드
//
//    List<Contact> findByContactDelimiter(String contactDelimiter);
//
//    List<Contact> findByContactCode(String contactCode);
//
//
//    // 구분자가 'C'인 거래처 목록을 조회하는 메소드 민성
//    List<Contact> findByContactDelimiter1(String delimiter);
//
//
//    @Query("SELECT new main.spring.login.demo2.dto.ContactYDto(contactName, contactCode)" +
//            "FROM Contact WHERE businessId = :businessId")
//    List<ContactYDto> findContactNameByBusinessId(@Param("businessId") String businessId);
//}