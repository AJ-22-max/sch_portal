import useUser from "../context/user/useUser";

export function useMiddleware() {
  const { user } = useUser();

  function isActive(): boolean {
    return user && user?.status === 1;
  }

  function hasRole(roleId: number, statusMode: boolean = true) {
    const pass = user?.role?.includes(roleId);
    return statusMode ? isActive() && pass : pass;
  }

  function hasSubRole(
    roleId: number,
    subRoleId: number,
    statusMode: boolean = true,
  ) {
    return hasRole(roleId, statusMode) && user?.sub_role?.includes(subRoleId);
  }

  function isCommon(): boolean {
    return (
      isActive() && user?.role?.some((role: number) => role >= 3 && role <= 6)
    );
  }

  function isSuperAdmin(): boolean {
    return hasRole(3);
  }

  function isOnlySchool(): boolean {
    return hasSubRole(3, 4);
  }

  function isAdmission(): boolean {
    return hasSubRole(4, 7);
  }

  function isAcademics(): boolean {
    return hasSubRole(4, 6);
  }

  function isFinance(): boolean {
    return hasSubRole(4, 4);
  }

  function isStudent(): boolean {
    return hasSubRole(5, 14);
  }

  function isParent(): boolean {
    return hasSubRole(6, 16);
  }

  function isHOD(): boolean {
    return hasSubRole(4, 13);
  }

  function isTeacher(): boolean {
    return hasSubRole(4, 11);
  }

  function isClassTeacher(): boolean {
    return hasSubRole(4, 12);
  }

  function isPRO(): boolean {
    return hasSubRole(4, 6);
  }

  function isLibrarian(): boolean {
    return hasSubRole(4, 17);
  }

  function isTertiaryRole(): boolean {
    return user && user?.school_type === "TERTIARY";
  }

  function isApplicanant(): boolean {
    return hasSubRole(5, 15, false);
  }

  return {
    isActive,
    isCommon,
    isSuperAdmin,
    isOnlySchool,
    isAdmission,
    isAcademics,
    isFinance,
    isStudent,
    isHOD,
    isTeacher,
    isClassTeacher,
    isPRO,
    isTertiaryRole,
    hasRole,
    hasSubRole,
    isApplicanant,
    isParent,
    isLibrarian,
  };
}
