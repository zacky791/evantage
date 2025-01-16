import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Checkbox, Select, Button, Flex } from '@chakra-ui/react';

export default function PasswordPolicyForm({ policy }) {
    const [isEditing, setIsEditing] = useState(false);
    const [auditUser, setAuditUser] = useState(policy['audit_user']);
    const [auditDate, setAuditDate] = useState(new Date(policy['audit_date']['date']).toLocaleString());
    const [passwordAgingInterval, setPasswordAgingInterval] = useState(policy['pwd_set_agi_itr']);
    const [advanceNotice, setAdvanceNotice] = useState(policy['pwd_set_adv_not']);
    const [minLength, setMinLength] = useState(policy['pwd_set_min_len']);
    const [maxLength, setMaxLength] = useState(policy['pwd_set_max_len']);
    const [passwordCriteria, setPasswordCriteria] = useState(policy['pwd_set_pwd_cri']);
    const [adjacentChecking, setAdjacentChecking] = useState(policy['pwd_set_adj_chk']);
    const [maxFailedAttempts, setMaxFailedAttempts] = useState(policy['pwd_set_max_failed_attempt']);
    const [allowMultipleSessions, setAllowMultipleSessions] = useState(policy['pwd_set_allow_multiple_session']);
    const [passwordAgingControl, setPasswordAgingControl] = useState(policy['cf_pwd_set_agi_ctr'] === '1');

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        console.log("Saving updated policy:", {
            auditUser,
            auditDate,
            passwordAgingInterval,
            advanceNotice,
            minLength,
            maxLength,
            passwordCriteria,
            adjacentChecking,
            maxFailedAttempts,
            allowMultipleSessions,
            passwordAgingControl,
        });
    };

    return (
        <Flex gap={20} ml={2} mt={1}>
            <Box>
                <h2 style={{ fontWeight: "bold", marginBottom: 10 }}>Password Aging</h2>
                <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="passwordAgingControl" mb={0}>Password Aging Control</FormLabel>
                    <Checkbox
                        id="passwordAgingControl"
                        isChecked={passwordAgingControl}
                        onChange={(e) => setPasswordAgingControl(e.target.checked)}
                        isDisabled={!isEditing}
                    />
                </FormControl>

                <FormControl mt={3}>
                    <FormLabel htmlFor="passwordAgingInterval" mb={0}>Password Aging Interval Day(s)</FormLabel>
                    <Input
                        id="passwordAgingInterval"
                        type="number"
                        value={passwordAgingInterval}
                        onChange={(e) => setPasswordAgingInterval(e.target.value)}
                        readOnly={!isEditing}
                    />
                </FormControl>

                <FormControl mt={3}>
                    <FormLabel htmlFor="advanceNotice" mb={0}>Advance Notice Day(s)</FormLabel>
                    <Input
                        id="advanceNotice"
                        type="number"
                        value={advanceNotice}
                        onChange={(e) => setAdvanceNotice(e.target.value)}
                        readOnly={!isEditing}
                    />
                </FormControl>

                <h2 style={{ fontWeight: "bold", marginTop: 40 }}>Password Settings</h2>
                <FormControl mt={3}>
                    <FormLabel htmlFor="minLength" mb={0}>Minimum Length</FormLabel>
                    <Input
                        id="minLength"
                        type="number"
                        value={minLength}
                        onChange={(e) => setMinLength(e.target.value)}
                        readOnly={!isEditing}
                    />
                </FormControl>

                <FormControl mt={3}>
                    <FormLabel htmlFor="maxLength" mb={0}>Maximum Length</FormLabel>
                    <Input
                        id="maxLength"
                        type="number"
                        value={maxLength}
                        onChange={(e) => setMaxLength(e.target.value)}
                        readOnly={!isEditing}
                    />
                </FormControl>

                <FormControl mt={3}>
                    <FormLabel htmlFor="passwordCriteria" mb={0}>Password Criteria</FormLabel>
                    <Select
                        id="passwordCriteria"
                        value={passwordCriteria}
                        onChange={(e) => setPasswordCriteria(e.target.value)}
                        isReadOnly={!isEditing}
                    >
                        <option value="A">Alphanumeric</option>
                    </Select>
                </FormControl>

                <FormControl mt={3} display="flex" alignItems="center">
                    <FormLabel htmlFor="adjacentChecking" mb={0}>Adjacent Checking</FormLabel>
                    <Checkbox
                        id="adjacentChecking"
                        isChecked={adjacentChecking === '1'}
                        onChange={(e) => setAdjacentChecking(e.target.checked ? '1' : '0')}
                        isDisabled={!isEditing}
                    />
                </FormControl>

                <FormControl mt={3}>
                    <FormLabel htmlFor="maxFailedAttempts" mb={0}>Maximum Failed Login Attempts</FormLabel>
                    <Input
                        id="maxFailedAttempts"
                        type="number"
                        value={maxFailedAttempts}
                        onChange={(e) => setMaxFailedAttempts(e.target.value)}
                        readOnly={!isEditing}
                    />
                </FormControl>
            </Box>

            <Box>
                <h2 style={{ fontWeight: "bold", marginBottom: 10 }}>Multiple Sessions</h2>
                <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="allowMultipleSessions" mb={0}>Allow Multiple Session per User</FormLabel>
                    <Checkbox
                        id="allowMultipleSessions"
                        isChecked={allowMultipleSessions === '1'}
                        onChange={(e) => setAllowMultipleSessions(e.target.checked ? '1' : '0')}
                        isDisabled={!isEditing}
                    />
                </FormControl>

                <h2 style={{ fontWeight: 'bold', marginTop: 20 }}>Audit Information</h2>
                <FormControl mt={3}>
                    <FormLabel htmlFor="auditUser" mb={0}>Last Audit User</FormLabel>
                    <Input
                        id="auditUser"
                        type="text"
                        value={auditUser}
                        onChange={(e) => setAuditUser(e.target.value)}
                        readOnly={!isEditing}
                    />
                </FormControl>

                <FormControl mt={3}>
                    <FormLabel htmlFor="auditDate" mb={0}>Last Audit Date</FormLabel>
                    <Input
                        id="auditDate"
                        type="text"
                        value={auditDate}
                        onChange={(e) => setAuditDate(e.target.value)}
                        readOnly={!isEditing}
                    />
                </FormControl>

                <Button
                    mt={4}
                    colorScheme="teal"
                    isFullWidth
                    onClick={isEditing ? handleSaveClick : handleEditClick}
                >
                    {isEditing ? 'Save Changes' : 'Edit'}
                </Button>
            </Box>
        </Flex>
    );
}