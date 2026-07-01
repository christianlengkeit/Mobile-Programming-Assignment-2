import { ScrollView, StyleSheet, Text, View } from "react-native";
import { courses } from "../data/academicData";

export default function CourseSummaryScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.screenTitle}>Course Summary</Text>
      <Text style={styles.subtitle}>Courses This Semester</Text>

      {courses.map((course) => (
        <View key={course.id} style={styles.courseCard}>
          <Text style={styles.courseName}>{course.name}</Text>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Course Code:</Text>
            <Text style={styles.value}>{course.code}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Credits:</Text>
            <Text style={styles.value}>{course.credits}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Lecturer:</Text>
            <Text style={styles.value}>{course.lecturer}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f5f6fa",
  },
  screenTitle: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 6,
    color: "#1f2937",
  },
  subtitle: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: 18,
    color: "#6b7280",
  },
  courseCard: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  courseName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#111827",
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 6,
  },
  label: {
    width: 100,
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
  },
  value: {
    flex: 1,
    fontSize: 14,
    color: "#4b5563",
  },
});