# Parent/Student View of Special Ed Data

## Overview
Parents and students automatically see the correct data based on their assigned teacher's type (speech or special_ed).

## How It Works

### Data Access
- Parents access student data through `studentBy(me.studentId)`
- All Special Ed data is stored directly in the student record:
  - `shared_initial_data` - البيانات الأولية (shared across all teachers)
  - `special_ed_forms` - Forms specific to Special Ed teachers
  - `special_ed_iep` - Special Ed IEP (different from speech teacher plan)
  - `special_ed_sessions` - Session planning records

### Parent Dashboard
The parent dashboard (`viewParentDashboard`) shows:
- Student basic info
- Teacher information (includes teacher_type)
- Forms list (automatically shows correct forms based on teacher type)
- Recent sessions
- Progress overview

### Student Profile Tabs
When parents view their child's profile, they see the same tabs as teachers but in **read-only mode**:

1. **النماذج (Forms)**
   - Speech teachers: Standard forms + shared initial data
   - Special Ed teachers: Special forms + PDF uploads + notes + shared initial data

2. **الخطة الفردية (IEP)**
   - Speech teachers: AI-generated goals with speech test integration
   - Special Ed teachers: Manual entry with hierarchical goals + PDF upload option

3. **متابعة الطالبة (Follow-up)**
   - Speech teachers: Session logs with skill evaluations
   - Special Ed teachers: Detailed session planning with procedural goals

4. **رسائل ولي الأمر (Messages)**
   - Same for both teacher types - two-way messaging

## Implementation Notes

### Automatic Detection
The `renderFormsTab`, `renderPlanTab`, and `renderFollowTab` functions check `STATE.user.teacher_type` to determine which interface to show. For parents:
- Parents don't have a `teacher_type` themselves
- They see the data created by their child's assigned teacher
- The views automatically adapt based on what data exists in the student record

### Read-Only Access
Parents can:
- ✅ View all forms, IEPs, and session records
- ✅ Download PDFs uploaded by teachers
- ✅ See detailed session notes and evaluations
- ❌ Cannot edit, create, or delete any records
- ❌ Cannot upload files
- ✅ Can send messages to teachers

## Data Visibility Rules

### Shared Data (Visible to All Teachers and Parents)
- `shared_initial_data` - البيانات الأولية
- Basic student info (name, grade, age, phone)

### Speech Teacher Data
- `plans` table - AI-generated IEP
- `sessionLogs` - Session records
- Standard forms (parentConsent, preAssessment, speechTest, auditoryMemoryTest)

### Special Ed Teacher Data
- `special_ed_iep` - Manual IEP with hierarchical goals
- `special_ed_sessions` - Detailed session planning
- `special_ed_forms` - PDF uploads and notes
- Medical diagnosis PDFs
- Diagnostic test PDFs

## Testing Checklist

- [ ] Parent can see shared initial data entered by any teacher
- [ ] Parent of speech teacher student sees speech IEP
- [ ] Parent of special ed teacher student sees special ed IEP
- [ ] Parent can view PDF files uploaded by special ed teachers
- [ ] Parent can see session records from their assigned teacher
- [ ] Parent cannot access edit/create buttons
- [ ] Messages work bidirectionally regardless of teacher type
